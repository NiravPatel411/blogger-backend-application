import scrapy
import base64
import requests
import csv  
import html
import codecs
import uuid


class QuotesSpider(scrapy.Spider):
    name = "quotes"
    list_of_rows=[]
    count = 0

    def start_requests(self):
        urls = [
            'https://www.baeldung.com/java-hashmap-load-factor'
        ]
        for url in urls:
            #self.log(f'Main URL {url}')
            yield scrapy.Request(url=url, callback=self.home) 

    def home(self, response):
        urls = response.css("[id=menu-categories]").css("li").css("a::attr(href)").getall()
        #self.log(f'Home Page All URL {urls}')
        for url in urls:
            #self.log(f'home page running : {url}')
            yield scrapy.Request(url=url, callback=self.pagination)
    
    def pagination(self, response):
        urls = response.css("h3.post-title").css("a::attr(href)").getall()
        #self.log(f'Pagination {urls}')
        for url in urls:
            #self.log(f'pagination running : {url}')
            yield scrapy.Request(url=url, callback=self.parseSubUrl)

    def parseSubUrl(self, response):
        title = response.css("h1::text").get()
        list_of_cells = []
        list_of_rows = []
        list_of_cells.append(title)
        #self.log(f'title {title}')
        #self.log(f'image {base64.b64encode(requests.get(response.css("img.alignnone::attr(src)").get()).content)}')
        
        content = ""
        response.css("section.further-reading-posts").remove()
        response.css("div.textwidget").remove()
        content = response.css("section").extract()
        images = response.css("img.alignnone")

        if images :
            for image in images:
                imageBase64 = base64.b64encode(requests.get(image.css("img.alignnone::attr(src)").get()).content)
                appendString = "<img src=\"data:image/png;base64,"+ str(imageBase64,'utf-8') + "\"/>"
                imagecontet = image.extract()

                if imagecontet in content[0]:
                    content[0] = content[0].replace(imagecontet,appendString)

        htmlContent = codecs.decode(content[0], 'unicode-escape')
        self.count = self.count + 1
        filenameHtml = f'baeldung-{str(uuid.uuid4())}-{self.count}.html'
        list_of_cells.append(filenameHtml)
        list_of_rows.append(list_of_cells)
        #self.log(f'{list_of_cells}')
        Html_file= open(filenameHtml,"w",encoding='utf-8')
        Html_file.write(htmlContent)
        Html_file.close()

        filename = f'baeldung.csv'
        self.log(f'list of row : {self.list_of_rows}')
        with open(filename, 'a',newline='',encoding='utf-8') as f: 
            write = csv.writer(f) 
            write.writerows(list_of_rows)
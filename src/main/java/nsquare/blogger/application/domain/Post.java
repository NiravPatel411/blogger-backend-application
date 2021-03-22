package nsquare.blogger.application.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A Post.
 */
@Entity
@Table(name = "post")
public class Post implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "author_id")
    private Long authorId;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "title")
    private String title;

    @Column(name = "meta_title")
    private String metaTitle;

    @Column(name = "slug")
    private String slug;

    @Lob
    @Column(name = "summary")
    private String summary;

    @Column(name = "published_at")
    private Instant publishedAt;

    @Lob
    @Column(name = "content")
    private String content;

    @Column(name = "tag_id")
    private Long tagId;

    @ManyToOne
    @JsonIgnoreProperties(value = "posts", allowSetters = true)
    private ApplicationUser authorId;

    @ManyToOne
    @JsonIgnoreProperties(value = "posts", allowSetters = true)
    private Post parentId;

    @ManyToMany(mappedBy = "postIds")
    @JsonIgnore
    private Set<Tag> tagIds = new HashSet<>();

    @ManyToMany(mappedBy = "postIds")
    @JsonIgnore
    private Set<Category> categoryIds = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAuthorId() {
        return authorId;
    }

    public Post authorId(Long authorId) {
        this.authorId = authorId;
        return this;
    }

    public void setAuthorId(Long authorId) {
        this.authorId = authorId;
    }

    public Long getParentId() {
        return parentId;
    }

    public Post parentId(Long parentId) {
        this.parentId = parentId;
        return this;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public Post categoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getTitle() {
        return title;
    }

    public Post title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMetaTitle() {
        return metaTitle;
    }

    public Post metaTitle(String metaTitle) {
        this.metaTitle = metaTitle;
        return this;
    }

    public void setMetaTitle(String metaTitle) {
        this.metaTitle = metaTitle;
    }

    public String getSlug() {
        return slug;
    }

    public Post slug(String slug) {
        this.slug = slug;
        return this;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getSummary() {
        return summary;
    }

    public Post summary(String summary) {
        this.summary = summary;
        return this;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Instant getPublishedAt() {
        return publishedAt;
    }

    public Post publishedAt(Instant publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }

    public void setPublishedAt(Instant publishedAt) {
        this.publishedAt = publishedAt;
    }

    public String getContent() {
        return content;
    }

    public Post content(String content) {
        this.content = content;
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getTagId() {
        return tagId;
    }

    public Post tagId(Long tagId) {
        this.tagId = tagId;
        return this;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public ApplicationUser getAuthorId() {
        return authorId;
    }

    public Post authorId(ApplicationUser applicationUser) {
        this.authorId = applicationUser;
        return this;
    }

    public void setAuthorId(ApplicationUser applicationUser) {
        this.authorId = applicationUser;
    }

    public Post getParentId() {
        return parentId;
    }

    public Post parentId(Post post) {
        this.parentId = post;
        return this;
    }

    public void setParentId(Post post) {
        this.parentId = post;
    }

    public Set<Tag> getTagIds() {
        return tagIds;
    }

    public Post tagIds(Set<Tag> tags) {
        this.tagIds = tags;
        return this;
    }

    public Post addTagId(Tag tag) {
        this.tagIds.add(tag);
        tag.getPostIds().add(this);
        return this;
    }

    public Post removeTagId(Tag tag) {
        this.tagIds.remove(tag);
        tag.getPostIds().remove(this);
        return this;
    }

    public void setTagIds(Set<Tag> tags) {
        this.tagIds = tags;
    }

    public Set<Category> getCategoryIds() {
        return categoryIds;
    }

    public Post categoryIds(Set<Category> categories) {
        this.categoryIds = categories;
        return this;
    }

    public Post addCategoryId(Category category) {
        this.categoryIds.add(category);
        category.getPostIds().add(this);
        return this;
    }

    public Post removeCategoryId(Category category) {
        this.categoryIds.remove(category);
        category.getPostIds().remove(this);
        return this;
    }

    public void setCategoryIds(Set<Category> categories) {
        this.categoryIds = categories;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Post)) {
            return false;
        }
        return id != null && id.equals(((Post) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Post{" +
            "id=" + getId() +
            ", authorId=" + getAuthorId() +
            ", parentId=" + getParentId() +
            ", categoryId=" + getCategoryId() +
            ", title='" + getTitle() + "'" +
            ", metaTitle='" + getMetaTitle() + "'" +
            ", slug='" + getSlug() + "'" +
            ", summary='" + getSummary() + "'" +
            ", publishedAt='" + getPublishedAt() + "'" +
            ", content='" + getContent() + "'" +
            ", tagId=" + getTagId() +
            "}";
    }
}

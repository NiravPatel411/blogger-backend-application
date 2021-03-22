package nsquare.blogger.application.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Category.
 */
@Entity
@Table(name = "category")
public class Category implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "meta_title")
    private String metaTitle;

    @Column(name = "slug")
    private String slug;

    @Lob
    @Column(name = "content")
    private String content;

    @ManyToOne
    @JsonIgnoreProperties(value = "categories", allowSetters = true)
    private Category parentId;

    @ManyToMany
    @JoinTable(name = "category_post_id",
               joinColumns = @JoinColumn(name = "category_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "post_id_id", referencedColumnName = "id"))
    private Set<Post> postIds = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Category title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMetaTitle() {
        return metaTitle;
    }

    public Category metaTitle(String metaTitle) {
        this.metaTitle = metaTitle;
        return this;
    }

    public void setMetaTitle(String metaTitle) {
        this.metaTitle = metaTitle;
    }

    public String getSlug() {
        return slug;
    }

    public Category slug(String slug) {
        this.slug = slug;
        return this;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getContent() {
        return content;
    }

    public Category content(String content) {
        this.content = content;
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Category getParentId() {
        return parentId;
    }

    public Category parentId(Category category) {
        this.parentId = category;
        return this;
    }

    public void setParentId(Category category) {
        this.parentId = category;
    }

    public Set<Post> getPostIds() {
        return postIds;
    }

    public Category postIds(Set<Post> posts) {
        this.postIds = posts;
        return this;
    }

    public Category addPostId(Post post) {
        this.postIds.add(post);
        post.getCategoryIds().add(this);
        return this;
    }

    public Category removePostId(Post post) {
        this.postIds.remove(post);
        post.getCategoryIds().remove(this);
        return this;
    }

    public void setPostIds(Set<Post> posts) {
        this.postIds = posts;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Category)) {
            return false;
        }
        return id != null && id.equals(((Category) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Category{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", metaTitle='" + getMetaTitle() + "'" +
            ", slug='" + getSlug() + "'" +
            ", content='" + getContent() + "'" +
            "}";
    }
}

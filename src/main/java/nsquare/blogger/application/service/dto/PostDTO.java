package nsquare.blogger.application.service.dto;

import java.time.Instant;
import java.io.Serializable;
import javax.persistence.Lob;

/**
 * A DTO for the {@link nsquare.blogger.application.domain.Post} entity.
 */
public class PostDTO implements Serializable {
    
    private Long id;

    private Long authorId;

    private Long parentId;

    private Long categoryId;

    private String title;

    private String metaTitle;

    private String slug;

    @Lob
    private String summary;

    private Instant publishedAt;

    @Lob
    private String content;

    private Long tagId;


    private Long authorIdId;

    private Long parentIdId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Long authorId) {
        this.authorId = authorId;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMetaTitle() {
        return metaTitle;
    }

    public void setMetaTitle(String metaTitle) {
        this.metaTitle = metaTitle;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Instant getPublishedAt() {
        return publishedAt;
    }

    public void setPublishedAt(Instant publishedAt) {
        this.publishedAt = publishedAt;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public Long getAuthorIdId() {
        return authorIdId;
    }

    public void setAuthorIdId(Long applicationUserId) {
        this.authorIdId = applicationUserId;
    }

    public Long getParentIdId() {
        return parentIdId;
    }

    public void setParentIdId(Long postId) {
        this.parentIdId = postId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PostDTO)) {
            return false;
        }

        return id != null && id.equals(((PostDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PostDTO{" +
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
            ", authorIdId=" + getAuthorIdId() +
            ", parentIdId=" + getParentIdId() +
            "}";
    }
}

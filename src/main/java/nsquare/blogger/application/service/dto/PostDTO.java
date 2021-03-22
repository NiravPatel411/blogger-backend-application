package nsquare.blogger.application.service.dto;

import java.time.Instant;
import java.io.Serializable;
import javax.persistence.Lob;

/**
 * A DTO for the {@link nsquare.blogger.application.domain.Post} entity.
 */
public class PostDTO implements Serializable {
    
    private Long id;

    private String title;

    private String metaTitle;

    private String slug;

    @Lob
    private String summary;

    private Instant publishedAt;

    @Lob
    private String content;


    private Long authorIdId;

    private Long parentIdId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
            ", title='" + getTitle() + "'" +
            ", metaTitle='" + getMetaTitle() + "'" +
            ", slug='" + getSlug() + "'" +
            ", summary='" + getSummary() + "'" +
            ", publishedAt='" + getPublishedAt() + "'" +
            ", content='" + getContent() + "'" +
            ", authorIdId=" + getAuthorIdId() +
            ", parentIdId=" + getParentIdId() +
            "}";
    }
}

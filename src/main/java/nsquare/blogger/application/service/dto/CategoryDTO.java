package nsquare.blogger.application.service.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Lob;

/**
 * A DTO for the {@link nsquare.blogger.application.domain.Category} entity.
 */
public class CategoryDTO implements Serializable {
    
    private Long id;

    private String title;

    private String metaTitle;

    private String slug;

    @Lob
    private String content;


    private Long parentIdId;
    private Set<PostDTO> postIds = new HashSet<>();
    
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getParentIdId() {
        return parentIdId;
    }

    public void setParentIdId(Long categoryId) {
        this.parentIdId = categoryId;
    }

    public Set<PostDTO> getPostIds() {
        return postIds;
    }

    public void setPostIds(Set<PostDTO> posts) {
        this.postIds = posts;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CategoryDTO)) {
            return false;
        }

        return id != null && id.equals(((CategoryDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CategoryDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", metaTitle='" + getMetaTitle() + "'" +
            ", slug='" + getSlug() + "'" +
            ", content='" + getContent() + "'" +
            ", parentIdId=" + getParentIdId() +
            ", postIds='" + getPostIds() + "'" +
            "}";
    }
}

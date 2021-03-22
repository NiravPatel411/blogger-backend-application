package nsquare.blogger.application.service.dto;

import java.io.Serializable;
import javax.persistence.Lob;

/**
 * A DTO for the {@link nsquare.blogger.application.domain.PostComment} entity.
 */
public class PostCommentDTO implements Serializable {
    
    private Long id;

    private String title;

    @Lob
    private String content;


    private Long postIdId;

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getPostIdId() {
        return postIdId;
    }

    public void setPostIdId(Long postId) {
        this.postIdId = postId;
    }

    public Long getParentIdId() {
        return parentIdId;
    }

    public void setParentIdId(Long postCommentId) {
        this.parentIdId = postCommentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PostCommentDTO)) {
            return false;
        }

        return id != null && id.equals(((PostCommentDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PostCommentDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", content='" + getContent() + "'" +
            ", postIdId=" + getPostIdId() +
            ", parentIdId=" + getParentIdId() +
            "}";
    }
}

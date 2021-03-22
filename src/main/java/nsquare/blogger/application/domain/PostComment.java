package nsquare.blogger.application.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A PostComment.
 */
@Entity
@Table(name = "post_comment")
public class PostComment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "post_id")
    private Long postId;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "title")
    private String title;

    @Lob
    @Column(name = "content")
    private String content;

    @ManyToOne
    @JsonIgnoreProperties(value = "postComments", allowSetters = true)
    private Post postId;

    @ManyToOne
    @JsonIgnoreProperties(value = "postComments", allowSetters = true)
    private PostComment parentId;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPostId() {
        return postId;
    }

    public PostComment postId(Long postId) {
        this.postId = postId;
        return this;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getParentId() {
        return parentId;
    }

    public PostComment parentId(Long parentId) {
        this.parentId = parentId;
        return this;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getTitle() {
        return title;
    }

    public PostComment title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public PostComment content(String content) {
        this.content = content;
        return this;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Post getPostId() {
        return postId;
    }

    public PostComment postId(Post post) {
        this.postId = post;
        return this;
    }

    public void setPostId(Post post) {
        this.postId = post;
    }

    public PostComment getParentId() {
        return parentId;
    }

    public PostComment parentId(PostComment postComment) {
        this.parentId = postComment;
        return this;
    }

    public void setParentId(PostComment postComment) {
        this.parentId = postComment;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PostComment)) {
            return false;
        }
        return id != null && id.equals(((PostComment) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PostComment{" +
            "id=" + getId() +
            ", postId=" + getPostId() +
            ", parentId=" + getParentId() +
            ", title='" + getTitle() + "'" +
            ", content='" + getContent() + "'" +
            "}";
    }
}

package nsquare.blogger.application.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import nsquare.blogger.application.web.rest.TestUtil;

public class PostCommentTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(PostComment.class);
        PostComment postComment1 = new PostComment();
        postComment1.setId(1L);
        PostComment postComment2 = new PostComment();
        postComment2.setId(postComment1.getId());
        assertThat(postComment1).isEqualTo(postComment2);
        postComment2.setId(2L);
        assertThat(postComment1).isNotEqualTo(postComment2);
        postComment1.setId(null);
        assertThat(postComment1).isNotEqualTo(postComment2);
    }
}

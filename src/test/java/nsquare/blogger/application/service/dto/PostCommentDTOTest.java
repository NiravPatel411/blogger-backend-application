package nsquare.blogger.application.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import nsquare.blogger.application.web.rest.TestUtil;

public class PostCommentDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(PostCommentDTO.class);
        PostCommentDTO postCommentDTO1 = new PostCommentDTO();
        postCommentDTO1.setId(1L);
        PostCommentDTO postCommentDTO2 = new PostCommentDTO();
        assertThat(postCommentDTO1).isNotEqualTo(postCommentDTO2);
        postCommentDTO2.setId(postCommentDTO1.getId());
        assertThat(postCommentDTO1).isEqualTo(postCommentDTO2);
        postCommentDTO2.setId(2L);
        assertThat(postCommentDTO1).isNotEqualTo(postCommentDTO2);
        postCommentDTO1.setId(null);
        assertThat(postCommentDTO1).isNotEqualTo(postCommentDTO2);
    }
}

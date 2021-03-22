package nsquare.blogger.application.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class PostCommentMapperTest {

    private PostCommentMapper postCommentMapper;

    @BeforeEach
    public void setUp() {
        postCommentMapper = new PostCommentMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 1L;
        assertThat(postCommentMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(postCommentMapper.fromId(null)).isNull();
    }
}

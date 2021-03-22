package nsquare.blogger.application.web.rest;

import nsquare.blogger.application.BloggerApp;
import nsquare.blogger.application.domain.PostComment;
import nsquare.blogger.application.repository.PostCommentRepository;
import nsquare.blogger.application.service.PostCommentService;
import nsquare.blogger.application.service.dto.PostCommentDTO;
import nsquare.blogger.application.service.mapper.PostCommentMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Base64Utils;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link PostCommentResource} REST controller.
 */
@SpringBootTest(classes = BloggerApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class PostCommentResourceIT {

    private static final Long DEFAULT_POST_ID = 1L;
    private static final Long UPDATED_POST_ID = 2L;

    private static final Long DEFAULT_PARENT_ID = 1L;
    private static final Long UPDATED_PARENT_ID = 2L;

    private static final String DEFAULT_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_TITLE = "BBBBBBBBBB";

    private static final String DEFAULT_CONTENT = "AAAAAAAAAA";
    private static final String UPDATED_CONTENT = "BBBBBBBBBB";

    @Autowired
    private PostCommentRepository postCommentRepository;

    @Autowired
    private PostCommentMapper postCommentMapper;

    @Autowired
    private PostCommentService postCommentService;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restPostCommentMockMvc;

    private PostComment postComment;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static PostComment createEntity(EntityManager em) {
        PostComment postComment = new PostComment()
            .postId(DEFAULT_POST_ID)
            .parentId(DEFAULT_PARENT_ID)
            .title(DEFAULT_TITLE)
            .content(DEFAULT_CONTENT);
        return postComment;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static PostComment createUpdatedEntity(EntityManager em) {
        PostComment postComment = new PostComment()
            .postId(UPDATED_POST_ID)
            .parentId(UPDATED_PARENT_ID)
            .title(UPDATED_TITLE)
            .content(UPDATED_CONTENT);
        return postComment;
    }

    @BeforeEach
    public void initTest() {
        postComment = createEntity(em);
    }

    @Test
    @Transactional
    public void createPostComment() throws Exception {
        int databaseSizeBeforeCreate = postCommentRepository.findAll().size();
        // Create the PostComment
        PostCommentDTO postCommentDTO = postCommentMapper.toDto(postComment);
        restPostCommentMockMvc.perform(post("/api/post-comments")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(postCommentDTO)))
            .andExpect(status().isCreated());

        // Validate the PostComment in the database
        List<PostComment> postCommentList = postCommentRepository.findAll();
        assertThat(postCommentList).hasSize(databaseSizeBeforeCreate + 1);
        PostComment testPostComment = postCommentList.get(postCommentList.size() - 1);
        assertThat(testPostComment.getPostId()).isEqualTo(DEFAULT_POST_ID);
        assertThat(testPostComment.getParentId()).isEqualTo(DEFAULT_PARENT_ID);
        assertThat(testPostComment.getTitle()).isEqualTo(DEFAULT_TITLE);
        assertThat(testPostComment.getContent()).isEqualTo(DEFAULT_CONTENT);
    }

    @Test
    @Transactional
    public void createPostCommentWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = postCommentRepository.findAll().size();

        // Create the PostComment with an existing ID
        postComment.setId(1L);
        PostCommentDTO postCommentDTO = postCommentMapper.toDto(postComment);

        // An entity with an existing ID cannot be created, so this API call must fail
        restPostCommentMockMvc.perform(post("/api/post-comments")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(postCommentDTO)))
            .andExpect(status().isBadRequest());

        // Validate the PostComment in the database
        List<PostComment> postCommentList = postCommentRepository.findAll();
        assertThat(postCommentList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllPostComments() throws Exception {
        // Initialize the database
        postCommentRepository.saveAndFlush(postComment);

        // Get all the postCommentList
        restPostCommentMockMvc.perform(get("/api/post-comments?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(postComment.getId().intValue())))
            .andExpect(jsonPath("$.[*].postId").value(hasItem(DEFAULT_POST_ID.intValue())))
            .andExpect(jsonPath("$.[*].parentId").value(hasItem(DEFAULT_PARENT_ID.intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE)))
            .andExpect(jsonPath("$.[*].content").value(hasItem(DEFAULT_CONTENT.toString())));
    }
    
    @Test
    @Transactional
    public void getPostComment() throws Exception {
        // Initialize the database
        postCommentRepository.saveAndFlush(postComment);

        // Get the postComment
        restPostCommentMockMvc.perform(get("/api/post-comments/{id}", postComment.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(postComment.getId().intValue()))
            .andExpect(jsonPath("$.postId").value(DEFAULT_POST_ID.intValue()))
            .andExpect(jsonPath("$.parentId").value(DEFAULT_PARENT_ID.intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE))
            .andExpect(jsonPath("$.content").value(DEFAULT_CONTENT.toString()));
    }
    @Test
    @Transactional
    public void getNonExistingPostComment() throws Exception {
        // Get the postComment
        restPostCommentMockMvc.perform(get("/api/post-comments/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updatePostComment() throws Exception {
        // Initialize the database
        postCommentRepository.saveAndFlush(postComment);

        int databaseSizeBeforeUpdate = postCommentRepository.findAll().size();

        // Update the postComment
        PostComment updatedPostComment = postCommentRepository.findById(postComment.getId()).get();
        // Disconnect from session so that the updates on updatedPostComment are not directly saved in db
        em.detach(updatedPostComment);
        updatedPostComment
            .postId(UPDATED_POST_ID)
            .parentId(UPDATED_PARENT_ID)
            .title(UPDATED_TITLE)
            .content(UPDATED_CONTENT);
        PostCommentDTO postCommentDTO = postCommentMapper.toDto(updatedPostComment);

        restPostCommentMockMvc.perform(put("/api/post-comments")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(postCommentDTO)))
            .andExpect(status().isOk());

        // Validate the PostComment in the database
        List<PostComment> postCommentList = postCommentRepository.findAll();
        assertThat(postCommentList).hasSize(databaseSizeBeforeUpdate);
        PostComment testPostComment = postCommentList.get(postCommentList.size() - 1);
        assertThat(testPostComment.getPostId()).isEqualTo(UPDATED_POST_ID);
        assertThat(testPostComment.getParentId()).isEqualTo(UPDATED_PARENT_ID);
        assertThat(testPostComment.getTitle()).isEqualTo(UPDATED_TITLE);
        assertThat(testPostComment.getContent()).isEqualTo(UPDATED_CONTENT);
    }

    @Test
    @Transactional
    public void updateNonExistingPostComment() throws Exception {
        int databaseSizeBeforeUpdate = postCommentRepository.findAll().size();

        // Create the PostComment
        PostCommentDTO postCommentDTO = postCommentMapper.toDto(postComment);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPostCommentMockMvc.perform(put("/api/post-comments")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(postCommentDTO)))
            .andExpect(status().isBadRequest());

        // Validate the PostComment in the database
        List<PostComment> postCommentList = postCommentRepository.findAll();
        assertThat(postCommentList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deletePostComment() throws Exception {
        // Initialize the database
        postCommentRepository.saveAndFlush(postComment);

        int databaseSizeBeforeDelete = postCommentRepository.findAll().size();

        // Delete the postComment
        restPostCommentMockMvc.perform(delete("/api/post-comments/{id}", postComment.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<PostComment> postCommentList = postCommentRepository.findAll();
        assertThat(postCommentList).hasSize(databaseSizeBeforeDelete - 1);
    }
}

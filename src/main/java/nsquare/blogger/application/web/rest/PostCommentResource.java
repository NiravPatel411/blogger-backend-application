package nsquare.blogger.application.web.rest;

import nsquare.blogger.application.service.PostCommentService;
import nsquare.blogger.application.web.rest.errors.BadRequestAlertException;
import nsquare.blogger.application.service.dto.PostCommentDTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link nsquare.blogger.application.domain.PostComment}.
 */
@RestController
@RequestMapping("/api")
public class PostCommentResource {

    private final Logger log = LoggerFactory.getLogger(PostCommentResource.class);

    private static final String ENTITY_NAME = "postComment";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PostCommentService postCommentService;

    public PostCommentResource(PostCommentService postCommentService) {
        this.postCommentService = postCommentService;
    }

    /**
     * {@code POST  /post-comments} : Create a new postComment.
     *
     * @param postCommentDTO the postCommentDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new postCommentDTO, or with status {@code 400 (Bad Request)} if the postComment has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/post-comments")
    public ResponseEntity<PostCommentDTO> createPostComment(@RequestBody PostCommentDTO postCommentDTO) throws URISyntaxException {
        log.debug("REST request to save PostComment : {}", postCommentDTO);
        if (postCommentDTO.getId() != null) {
            throw new BadRequestAlertException("A new postComment cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PostCommentDTO result = postCommentService.save(postCommentDTO);
        return ResponseEntity.created(new URI("/api/post-comments/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /post-comments} : Updates an existing postComment.
     *
     * @param postCommentDTO the postCommentDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated postCommentDTO,
     * or with status {@code 400 (Bad Request)} if the postCommentDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the postCommentDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/post-comments")
    public ResponseEntity<PostCommentDTO> updatePostComment(@RequestBody PostCommentDTO postCommentDTO) throws URISyntaxException {
        log.debug("REST request to update PostComment : {}", postCommentDTO);
        if (postCommentDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PostCommentDTO result = postCommentService.save(postCommentDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, postCommentDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /post-comments} : get all the postComments.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of postComments in body.
     */
    @GetMapping("/post-comments")
    public ResponseEntity<List<PostCommentDTO>> getAllPostComments(Pageable pageable) {
        log.debug("REST request to get a page of PostComments");
        Page<PostCommentDTO> page = postCommentService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /post-comments/:id} : get the "id" postComment.
     *
     * @param id the id of the postCommentDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the postCommentDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/post-comments/{id}")
    public ResponseEntity<PostCommentDTO> getPostComment(@PathVariable Long id) {
        log.debug("REST request to get PostComment : {}", id);
        Optional<PostCommentDTO> postCommentDTO = postCommentService.findOne(id);
        return ResponseUtil.wrapOrNotFound(postCommentDTO);
    }

    /**
     * {@code DELETE  /post-comments/:id} : delete the "id" postComment.
     *
     * @param id the id of the postCommentDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/post-comments/{id}")
    public ResponseEntity<Void> deletePostComment(@PathVariable Long id) {
        log.debug("REST request to delete PostComment : {}", id);
        postCommentService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}

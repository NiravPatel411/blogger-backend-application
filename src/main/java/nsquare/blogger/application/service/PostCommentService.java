package nsquare.blogger.application.service;

import nsquare.blogger.application.domain.PostComment;
import nsquare.blogger.application.repository.PostCommentRepository;
import nsquare.blogger.application.service.dto.PostCommentDTO;
import nsquare.blogger.application.service.mapper.PostCommentMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link PostComment}.
 */
@Service
@Transactional
public class PostCommentService {

    private final Logger log = LoggerFactory.getLogger(PostCommentService.class);

    private final PostCommentRepository postCommentRepository;

    private final PostCommentMapper postCommentMapper;

    public PostCommentService(PostCommentRepository postCommentRepository, PostCommentMapper postCommentMapper) {
        this.postCommentRepository = postCommentRepository;
        this.postCommentMapper = postCommentMapper;
    }

    /**
     * Save a postComment.
     *
     * @param postCommentDTO the entity to save.
     * @return the persisted entity.
     */
    public PostCommentDTO save(PostCommentDTO postCommentDTO) {
        log.debug("Request to save PostComment : {}", postCommentDTO);
        PostComment postComment = postCommentMapper.toEntity(postCommentDTO);
        postComment = postCommentRepository.save(postComment);
        return postCommentMapper.toDto(postComment);
    }

    /**
     * Get all the postComments.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<PostCommentDTO> findAll(Pageable pageable) {
        log.debug("Request to get all PostComments");
        return postCommentRepository.findAll(pageable)
            .map(postCommentMapper::toDto);
    }


    /**
     * Get one postComment by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<PostCommentDTO> findOne(Long id) {
        log.debug("Request to get PostComment : {}", id);
        return postCommentRepository.findById(id)
            .map(postCommentMapper::toDto);
    }

    /**
     * Delete the postComment by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete PostComment : {}", id);
        postCommentRepository.deleteById(id);
    }
}

package nsquare.blogger.application.repository;

import nsquare.blogger.application.domain.PostComment;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the PostComment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
}

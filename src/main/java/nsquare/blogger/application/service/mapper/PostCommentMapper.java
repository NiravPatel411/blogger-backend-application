package nsquare.blogger.application.service.mapper;


import nsquare.blogger.application.domain.*;
import nsquare.blogger.application.service.dto.PostCommentDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link PostComment} and its DTO {@link PostCommentDTO}.
 */
@Mapper(componentModel = "spring", uses = {PostMapper.class})
public interface PostCommentMapper extends EntityMapper<PostCommentDTO, PostComment> {

    @Mapping(source = "postId.id", target = "postIdId")
    @Mapping(source = "parentId.id", target = "parentIdId")
    PostCommentDTO toDto(PostComment postComment);

    @Mapping(source = "postIdId", target = "postId")
    @Mapping(source = "parentIdId", target = "parentId")
    PostComment toEntity(PostCommentDTO postCommentDTO);

    default PostComment fromId(Long id) {
        if (id == null) {
            return null;
        }
        PostComment postComment = new PostComment();
        postComment.setId(id);
        return postComment;
    }
}

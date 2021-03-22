package nsquare.blogger.application.service.mapper;


import nsquare.blogger.application.domain.*;
import nsquare.blogger.application.service.dto.PostDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring", uses = {ApplicationUserMapper.class})
public interface PostMapper extends EntityMapper<PostDTO, Post> {

    @Mapping(source = "authorId.id", target = "authorIdId")
    @Mapping(source = "parentId.id", target = "parentIdId")
    PostDTO toDto(Post post);

    @Mapping(source = "authorIdId", target = "authorId")
    @Mapping(source = "parentIdId", target = "parentId")
    @Mapping(target = "tagIds", ignore = true)
    @Mapping(target = "removeTagId", ignore = true)
    @Mapping(target = "categoryIds", ignore = true)
    @Mapping(target = "removeCategoryId", ignore = true)
    Post toEntity(PostDTO postDTO);

    default Post fromId(Long id) {
        if (id == null) {
            return null;
        }
        Post post = new Post();
        post.setId(id);
        return post;
    }
}

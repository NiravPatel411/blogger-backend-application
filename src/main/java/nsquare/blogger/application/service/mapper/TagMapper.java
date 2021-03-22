package nsquare.blogger.application.service.mapper;


import nsquare.blogger.application.domain.*;
import nsquare.blogger.application.service.dto.TagDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tag} and its DTO {@link TagDTO}.
 */
@Mapper(componentModel = "spring", uses = {PostMapper.class})
public interface TagMapper extends EntityMapper<TagDTO, Tag> {


    @Mapping(target = "removePostId", ignore = true)

    default Tag fromId(Long id) {
        if (id == null) {
            return null;
        }
        Tag tag = new Tag();
        tag.setId(id);
        return tag;
    }
}

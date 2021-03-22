package nsquare.blogger.application.service.mapper;


import nsquare.blogger.application.domain.*;
import nsquare.blogger.application.service.dto.CategoryDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Category} and its DTO {@link CategoryDTO}.
 */
@Mapper(componentModel = "spring", uses = {PostMapper.class})
public interface CategoryMapper extends EntityMapper<CategoryDTO, Category> {

    @Mapping(source = "parentId.id", target = "parentIdId")
    CategoryDTO toDto(Category category);

    @Mapping(source = "parentIdId", target = "parentId")
    @Mapping(target = "removePostId", ignore = true)
    Category toEntity(CategoryDTO categoryDTO);

    default Category fromId(Long id) {
        if (id == null) {
            return null;
        }
        Category category = new Category();
        category.setId(id);
        return category;
    }
}

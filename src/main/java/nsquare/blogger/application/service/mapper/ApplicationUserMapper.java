package nsquare.blogger.application.service.mapper;


import nsquare.blogger.application.domain.*;
import nsquare.blogger.application.service.dto.ApplicationUserDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link ApplicationUser} and its DTO {@link ApplicationUserDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ApplicationUserMapper extends EntityMapper<ApplicationUserDTO, ApplicationUser> {



    default ApplicationUser fromId(Long id) {
        if (id == null) {
            return null;
        }
        ApplicationUser applicationUser = new ApplicationUser();
        applicationUser.setId(id);
        return applicationUser;
    }
}

package nsquare.blogger.application.service.dto;

import java.io.Serializable;
import javax.persistence.Lob;

/**
 * A DTO for the {@link nsquare.blogger.application.domain.ApplicationUser} entity.
 */
public class ApplicationUserDTO implements Serializable {
    
    private Long id;

    private String mobile;

    private String intro;

    @Lob
    private String profile;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ApplicationUserDTO)) {
            return false;
        }

        return id != null && id.equals(((ApplicationUserDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ApplicationUserDTO{" +
            "id=" + getId() +
            ", mobile='" + getMobile() + "'" +
            ", intro='" + getIntro() + "'" +
            ", profile='" + getProfile() + "'" +
            "}";
    }
}

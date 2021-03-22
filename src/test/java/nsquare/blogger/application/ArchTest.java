package nsquare.blogger.application;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("nsquare.blogger.application");

        noClasses()
            .that()
            .resideInAnyPackage("nsquare.blogger.application.service..")
            .or()
            .resideInAnyPackage("nsquare.blogger.application.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..nsquare.blogger.application.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}

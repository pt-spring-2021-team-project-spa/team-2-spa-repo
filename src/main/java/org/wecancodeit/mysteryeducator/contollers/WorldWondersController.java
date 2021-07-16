package org.wecancodeit.mysteryeducator.contollers;

import org.wecancodeit.mysteryeducator.models.WorldWonders;
import org.wecancodeit.mysteryeducator.repositories.WorldWondersRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class WorldWondersController {

    @Resource
    private WorldWondersRepository worldWondersRepo;

    @GetMapping("/worldWonders")
    public Collection<WorldWonders> getWorldWonders() {
        return (Collection<WorldWonders>) worldWondersRepo.findAll();
    }

    @GetMapping("/worldWonder/{id}")
    public Optional<WorldWonders> getWorldWonder(@PathVariable Long id){
        return worldWondersRepo.findById(id);
    }
}

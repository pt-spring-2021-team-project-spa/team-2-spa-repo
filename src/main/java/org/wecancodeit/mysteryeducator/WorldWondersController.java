package org.wecancodeit.mysteryeducator;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create-worldWonder")
    public Collection<WorldWonders> createWorldWonder(@RequestBody String body) throws JSONException {
        JSONObject newWorldWonder = new JSONObject(body);
        String worldWonderName = newWorldWonder.getString("worldWonderName");
        String worldWonderLocation = newWorldWonder.getString("worldWonderLocation");
        String worldWonderYearOfConstruction = newWorldWonder.getString("worldWonderYearOfConstruction");
        String worldWonderHeight = newWorldWonder.getString("worldWonderHeight");
        String worldWonderLength = newWorldWonder.getString("worldWonderLength");
        String worldWonderAge = newWorldWonder.getString("worldWonderAge");
        String worldWonderFunFact = newWorldWonder.getString("worldWonderFunFact");
        String worldWonderMyth = newWorldWonder.getString("worldWonderMyth");
        String worldWonderImgUrl = newWorldWonder.getString("worldWonderImgUrl");
        String worldWonderUrl = newWorldWonder.getString("worldWonderUrl");
        Optional<WorldWonders> worldWondersToAddOpt = worldWondersRepo.findByUrl(worldWonderUrl);

        if (worldWondersToAddOpt.isEmpty()) {
            WorldWonders worldWonderToAdd = new WorldWonders(worldWonderName,worldWonderLocation,worldWonderYearOfConstruction,worldWonderHeight,worldWonderLength,worldWonderAge,worldWonderFunFact,worldWonderMyth,worldWonderImgUrl,worldWonderUrl);
            worldWondersRepo.save(worldWonderToAdd);
        }
        return (Collection<WorldWonders>) worldWondersRepo.findAll();
    }
}

package org.wecancodeit.mysteryeducator.repositories;

import org.wecancodeit.mysteryeducator.models.WorldWonders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


public interface WorldWondersRepository extends CrudRepository<WorldWonders,Long> {
    Optional<WorldWonders> findByName(String name);
}

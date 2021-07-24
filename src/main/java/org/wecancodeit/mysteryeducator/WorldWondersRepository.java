package org.wecancodeit.mysteryeducator;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface WorldWondersRepository extends CrudRepository<WorldWonders,Long> {
    Optional<WorldWonders> findByUrl(String url);
}

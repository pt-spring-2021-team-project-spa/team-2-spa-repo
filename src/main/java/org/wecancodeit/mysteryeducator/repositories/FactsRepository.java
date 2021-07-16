package org.wecancodeit.mysteryeducator.repositories;

import org.wecancodeit.mysteryeducator.models.Facts;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface FactsRepository extends CrudRepository<Facts,Long> {
}

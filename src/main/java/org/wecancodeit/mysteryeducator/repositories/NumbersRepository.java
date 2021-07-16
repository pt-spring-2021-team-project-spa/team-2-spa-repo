package org.wecancodeit.mysteryeducator.repositories;

import org.wecancodeit.mysteryeducator.models.Numbers;
import org.springframework.data.repository.CrudRepository;

public interface NumbersRepository extends CrudRepository<Numbers,Long> {
}

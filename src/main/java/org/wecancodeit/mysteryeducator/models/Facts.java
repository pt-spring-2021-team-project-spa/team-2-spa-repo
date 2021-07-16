package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Objects;

@Entity
public class Facts {

    @Id
    @GeneratedValue
    private Long id;
    private String funFact;
    private String myth;

    @OneToOne
    private WorldWonders worldWonders;

    public Facts() {

    }

    public Facts(String funFact, String myth){
        this.funFact = funFact;
        this.myth = myth;
    }

    public Long getId() {
        return id;
    }

    public String getFunFact() {
        return funFact;
    }

    public String getMyth() {
        return myth;
    }

    public WorldWonders getWorldWonders() {
        return worldWonders;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Facts facts = (Facts) o;
        return Objects.equals(id, facts.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

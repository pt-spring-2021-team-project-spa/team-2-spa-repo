package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Objects;

@Entity
public class WorldWonders {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    private String imgUrl;

    @OneToOne
    private Numbers numbers;

    @OneToOne
    private Facts facts;

    public WorldWonders(){

    }

    public WorldWonders(String name, String location, Numbers numbers, Facts facts, String imgUrl) {
        this.name = name;
        this.location = location;
        this.numbers = numbers;
        this.facts = facts;
        this.imgUrl = imgUrl;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public Numbers getNumbers() {
        return numbers;
    }

    public Facts getFacts() {
        return facts;
    }

    public String getImgUrl(){
        return imgUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WorldWonders that = (WorldWonders) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Objects;

@Entity
public class Numbers {

    @Id
    @GeneratedValue
    private Long id;
    private String yearOfConstruction;
    private String height;
    private String length;
    private String age;

    @OneToOne
    private WorldWonders worldWonders;

    public Numbers(){

    }

    public Numbers(String yearOfConstruction, String height, String length, String age) {
        this.yearOfConstruction = yearOfConstruction;
        this.height = height;
        this.length = length;
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public String getYearOfConstruction() {
        return yearOfConstruction;
    }

    public String getHeight() {
        return height;
    }

    public String getLength() {
        return length;
    }

    public String getAge() {
        return age;
    }

    public WorldWonders getWorldWonders() {
        return worldWonders;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Numbers data = (Numbers) o;
        return Objects.equals(id, data.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

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
    private String yearOfConstruction;
    private String height;
    private String length;
    private String age;
    private String funFact;
    private String myth;
    private String imgUrl;

    public WorldWonders(){

    }

    public WorldWonders(String name, String location, String yearOfConstruction, String height, String length, String age, String funFact, String myth, String imgUrl) {
        this.name = name;
        this.location = location;
        this.yearOfConstruction = yearOfConstruction;
        this.height = height;
        this.length = length;
        this.age = age;
        this.funFact = funFact;
        this.myth = myth;
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

    public String getFunFact() {
        return funFact;
    }

    public String getMyth() {
        return myth;
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

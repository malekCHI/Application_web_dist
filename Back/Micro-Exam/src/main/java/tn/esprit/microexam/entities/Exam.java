package tn.esprit.microexam.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import lombok.experimental.FieldDefaults;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Exam implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idE;
    @NotBlank(message = "Title is required")
    String title;
    @NotBlank(message = "Description is required")
    String description;
    int duration;
    @PositiveOrZero(message = "Score must be a positive or zero value")
    int score;
    int maxAttempts;
    @Enumerated(EnumType.STRING)
    ExamType examType;
    //attributs pour ajouter quiz
    int noteMinRequis;
    //attributs pour ajouter Certificat
    @Temporal(TemporalType.DATE)
    Date startDate;
    @Temporal(TemporalType.DATE)
    Date endDate;
    @PositiveOrZero(message = "Price must be a positive or zero value")
    double price;


    @JsonManagedReference
    @JsonIgnore
    @OneToMany(mappedBy = "exam")
    Set<Question> questions=new HashSet<>();

}

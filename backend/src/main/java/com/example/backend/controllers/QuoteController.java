package com.example.backend.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.QuoteModel;
import com.example.backend.repositories.QuoteRepository;

@RestController
public class QuoteController {

  @Autowired
  QuoteRepository quoteRepository;

  @GetMapping("/quotes")
  public ResponseEntity<List<QuoteModel>> getAllQuotes() {
    return ResponseEntity.status(HttpStatus.OK).body(quoteRepository.findAll());
  }
  
  @GetMapping("/quotes/{id}")
  public ResponseEntity<Object> getOneQuote(UUID id) {
    Optional<QuoteModel> quote = quoteRepository.findById(id);

    if (quote.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Quote not found");
    }

    System.out.println(quote);

    return ResponseEntity.status(HttpStatus.OK).body(quote.get());
  }

  @PostMapping("/quotes")
  public ResponseEntity<QuoteModel> saveQuote(@RequestBody QuoteModel request) {
    var quoteModel = new QuoteModel();
    BeanUtils.copyProperties(request, quoteModel);
    return ResponseEntity.status(HttpStatus.CREATED).body(quoteRepository.save(quoteModel));
  }
}

from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="todos", on_delete=models.CASCADE, null=True)

    def _str_(self):
        return self.title


class Card(models.Model):
    class Suit(models.IntegerChoices):
        DIAMOND = 1
        SPADE = 2
        HEART = 3
        CLUB = 4

    class Ranking(models.IntegerChoices):
        TWO = 1
        THREE = 2
        FOUR = 3
        FIVE = 4
        SIX = 5
        SEVEN = 6
        EIGHT = 7
        NINE = 8
        TEN = 9
        JACK = 10
        QUEEN = 11
        KING = 12
        ACE = 13

    ranking = models.IntegerField(choices=Ranking.choices)
    suit = models.IntegerField(choices=Suit.choices)

    def _str_(self):
        return self.ranking + ' of ' + self.suit

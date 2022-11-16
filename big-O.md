# Big O complexity

[https://big-o.io/algorithms/comparison/bubble-sort/](Big-O Sort Algorithm reference in Java, Java (Generic), C++, Swift, Javascript, Python 3)
[https://www.bigocheatsheet.com/](Big-O Cheet Sheet)

    O(!n) O(2^n)    O(n^2)  
/|\                  
 |  .    .         .                                                                                                
 |  .    .         .
 |  .    .         .                                                      _             
 |  .    .         .                                                   _
o   .    .         .                                               _  BAD vvv
 |  .    .                                                    _
p   .    .        .                                       _           
 |  .    .                                           _
e   .    .                                       _                        .
 |  .    .                                    _                      .
r   .    .      .             HORRIBLE  ^^^_                     .   
 |  .    .                             _                    .  
a   .    .                          _     O(n log n)  . 
 |  .    .                       _              .  
t   .    .    .              _             .                               
 |  .    .               _            .
i   .   .            _           .
 |  .            _         .
o   .  .   .          .                    FAIR vvv
 |  .             .
n   . . .     .                           O(n)                             .
 |  .     .                                                .
s   . .                                   .                                                  GOOD vvv
 |  .     .    .    .    .    .    .    .    .    .    .    .    .    .    .  O(log n), O(1)   EXECELLENT vvv
 _.___________________________________________________________________________\
 |                                     e l e m e n t s                        /
 

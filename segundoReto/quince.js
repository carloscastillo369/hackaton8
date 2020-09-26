/*

15. ALGORITMO DE EDAD SUFICIENTE PARA VOTAR

Dato: Proximas elecciones 11 de abril de 2021.

Constantes: D = 11
            M = 04
            A = 2021

Variables: d,m,a,R (numeros enteros)

INICIO
P1. Ingresar el dia de nacimiento: (guardar valor en la variable d)
P2. Validar que el valor de d sea de dos digitos.
P3. Ingresar el mes de nacimiento: (guardar valor en la variable m)
P4. Validar que el valor de m sea de dos digitos.
P5. Ingresar el año de nacimiento: (guardar valor en la variable a)
P6. Validar que el valor de a sea de cuatro digitos.
P7. R = A - a
P8. Si, R < 18
P9. Entonces, Imprimir ("Esta persona no puede votar")
P10. Si, R = 18 y M < m
P11. Entonces, Imprimir ("Esta persona no puede votar")
P12. Si, R = 18  &  M = m  &  D < d
P13. Entonces, Imprimir ("Esta persona no puede votar")
P14. Si, R = 18  &  M = m  &  D > d
P15. Entonces, Imprimir ("Esta persona puede votar")
P16. Si, R = 18  &  M > m 
P17. Entonces, Imprimir ("Esta persona puede votar")
P18. Si, R > 18 
P19. Entonces, Imprimir ("Esta persona puede votar")
FIN

*/
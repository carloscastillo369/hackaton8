/*

14. ALGORITMO NUMERO DE FOCOS VERDES, BLANCOS Y ROJOS

Variables: N,C V=0, B=0, R=0, i=1 (números enteros)

INICIO
P1. Ingrese el número total de focos: (guardar valor en la variable N)
P2. Para i=1 hasta N hacer:
        Imprimir ("Escoja el valor del color: 1 si es Verde, 2 si es Blanco, 3 si es Rojo")
        Ingresar el valor color: (guardar valor en la variable C)
        Repetir 
            Si, C < 1  o  C > 3
            Imprimir ("Valor invalido ingrese otro valor")
        Hasta que C>=1 o C<=3
            Si, C = 1
            Entonces, V = V + 1
            Si C = 2
            Entonces, B = B + 1
            Si C = 3
            Entonces, R = R + 1
    Fin Para
P3. Imprimir ("El número de focos verdes es:", V)
    Imprimir ("El número de focos blancos es:", B)
    Imprimir ("El número de focos rojos es:", R)
FIN


*/
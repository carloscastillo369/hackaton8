1. ALGORITMO SUMA DE DOS NUMEROS

Variables: A,B,C (numeros)

INICIO
P1. Ingresar el primer numero: (guardar valor en la variable A)
P2. Ingresar el segundo numero: (guardar valor en la variable B)
P3. C = A+B
P4. Imprimir ("La suma es:", C)
FIN


2. ALGORITMO PROMEDIO DE CUATRO NOTAS

Variables: A,B,C,D,E (numeros enteros)

INICIO
P1. Ingresar nota primer examen: (guardar valor en la variable A)
P2. Ingresar nota segundo examen: (guardar valor en la variable B)
P3. Ingresar nota tercer examen: (guardar valor en la variable C)
P4. Ingresar nota cuarto exameN: (guardar valor en la variable D)
P5. E = (A+B+C+D)/4
P6. Imprimir ("El Promedio es:", E)
FIN


3. ALGORITMO AREA DEL RECTANGULO

Variables: B,H,A (numeros)

INICIO
P1. Ingresar la base del rectangulo en cm: (guardar valor en la variable B)
P2. Ingresar la altura del rectangulo en cm: (guardar valor en la variable H)
P3. A = B*H
P4. Imprimir ("El área del rectangulo es:", A,"cm^2")
FIN

4. ALGORITMO AREA DEL TRIANGULO

Variables: B,H,A (numeros)

INICIO
P1. Ingresar la base del triangulo en cm: (guardar valor en la variable B)
P2. Ingresar la altura del triangulo en cm: (guardar valor en la variable H)
P3. A = (B*H)/2
P4. Imprimir ("El area del triangulo es:", A, "cm^2")
FIN

5. ALGORITMO AREA DE LA CIRCUNFERENCIA

Variables: R,A (numeros)
Contante: Pi=3.1416

INICIO
P1. Ingresar el radio de la circunferencia: (guardar valor en la variable R)
P2. A = Pi*R*R
P3. Imprimir ("El area de la circunferencia es:", A,"cm^2")
FIN

6. ALGORITMO SUELDO SEMANAL 

Variables: A,B,S (numero entero)

INICIO
P1. Ingresar horas trabajadas a la semana: (guardar valor en la variable A)
P2. Ingresar salario hora hombre: (guardar valor en la variable B)
P3. S = A*B
P4. Imprimir ("Sueldo semanal es:", S)
FIN

7. ALGORITMO CONVERSION METRO-PULGADA

Variables: A,P (numero)
Constante: M = 1/0.0254

INICIO
P1. Ingresar numero de metros requeridos: (guardar valor en la variable A)
P2. P = A*M
P3. Imprimir ("Cantidad en pulgadas es:", P)
FIN

8. ALGORITMO CONVERSION SOLES-DOLARES

Variable: S,B,D (número)

INICIO
P1. Ingresar cantidad de dinero en soles: (guardar valor en la variable S)
P2. Ingresar tipo de cambio de dolar a soles actual: (guardar valor en la variable B)
P3. D = S/B
P4. Imprimir ("Cantidad en dolares es:", D)
FIN

9. ALGORITMO EDAD POR FECHA DE NACIMIENTO

Variable: A,B,E (numero entero)

INICIO
P1. Ingresar el año de nacimiento: (guardar valor en la variable A)
P2. Validar que el valor de A tenga 4 digitos.
P3. Ingresar el año actual: (guardar valor en la variable B)
P4. Validar que el valor de B tenga 4 digitos.
P5. E = B-A
P6. Imprimir ("Su edad es:", E)
FIN

10. ALGORITMO PERSONA DE MENOR EDAD

Constantes: NOMBRE1 = A  (A,B,C son numeros enteros y distintos)
            NOMBRE2 = B
            NOMBRE3 = C

INICIO
P1. Si, A < B & A < C
P2. Entonces, Imprimir ("La persona de menor edad es:", NOMBRE1,"y tiene", A "años")
P3. Si no, Si B < A & B < C
P4. Entonces, Imprimir ("La persona de menor edad es:", NOMBRE2,"y tiene", B "años")
P5. Si no, Entonces, Imprimir ("La persona de menor edad es:", NOMBRE3,"y tiene", C "años")
FIN

11. ALGORITMO BONO

Variables: A,B (numero entero)
Contantes: bono1 = 100
           bono2 = 1000

INICIO
P1. Ingresar años de trabajo: (guardar valor en la variable A)
P2. Si, A < 6
P3. Entonces, B = A*100
P4. Si no, B = bono2 
P5. Imprimir ("Su bono es:", B)
FIN

12. ALGORITMO SALARIO CON INCREMENTO ANUAL

Variable: A,T (numero entero)
Constantes:  S = 1500 
             R = 1.1

INICIO
P1. Ingresar el tiempo de trabajo en años: (guardar valor en la variable A)
P2. T = S*(R^A)
P3. Imprimir ("El sueldo al cabo de", A, "años es:", T "soles")
FIN

13. ALGORITMO DE ALUMNOS APROBADOS Y DESAPROBADOS

Dato: Nota aprobatoria 11.

Variables: N, M, A = 0,  D = 0, i=1 (numeros enteros)

Constante: B=11

INICIO
P1. Ingrese el numero de estudiantes: (guardar valor en la variable N)
P2. Para i=1 hasta N hacer:
        Ingresar nota del alumno: (guardar valor en la variable M)
        Si, M >= 11
        Entonces, A = A + 1
        Si no, D = D + 1
    Fin Para
P3. Imprimir ("El numero de aprobados es:", A)
    Imprimir ("El numero de reprobados es:", D)
FIN


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
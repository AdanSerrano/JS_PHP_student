<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Television',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curvo',
        'precio' => 400,
        'disponible' => false
    ],
];

foreach ($productos as $producto){ ?>
    <li>
        <p>Producto: <?php echo $producto['nombre'] ?></p>
        <p>Precio: <?php echo "$ ".$producto['precio'] ?></p>
        <!-- OPERADOR TERNARIO  '?' es un if operador ternario ':' es un else-->
        <p><?php echo($producto['disponible']) ? 'Disponible' : 'No Disponible'; ?></p>
        <!-- <?php
            if($producto['disponible']):
                echo "<p>Disponible</p>";
            else:
                echo "<p>No Disponible</p>";
            endif;
        ?> -->
    </li>
    <?php
};




include 'includes/footer.php';
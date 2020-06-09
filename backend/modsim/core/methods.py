

def euler(f, x_zero, y_zero, n, h=None):
    if h is None:
        h = (f(n) – f(0)) / n

    for i in range(1, n+1):
        new_x = x_zero + h
        y_zero = y_zero + h * f(x)
        x = new_x
        print("{}: {:.4f} {:.4f}".format(i, x, y))
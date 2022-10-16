class RoundPeg {

  int radius;

  RoundPeg(int r) {
    this.radius = r;
  }

  public int getRadius() {
    return this.radius;
  }
}

class RoundHole {

  int radius;

  RoundHole(int r) {
    this.radius = r;
  }

  public boolean canFit(RoundPeg hole) {
    return this.radius >= hole.getRadius();
  }
}

class SquarePeg {

  int side;

  SquarePeg(int side) {
    this.side = side;
  }
}

class SquarePegAdapter extends RoundPeg {

  SquarePeg squarePeg;

  SquarePegAdapter(SquarePeg squarePeg) {
    super(squarePeg.side);
    this.squarePeg = squarePeg;
  }

  public int getRadius() {
    return (int) (squarePeg.side * Math.sqrt(2) / 2);
  }
}

public class AdapterPattern {

  public static void main(String args[]) {
    RoundHole hole = new RoundHole(5);
    RoundPeg peg = new RoundPeg(10);
    SquarePeg squarePeg = new SquarePeg(4);

    System.out.println(hole.canFit(new SquarePegAdapter(squarePeg)));
  }
}

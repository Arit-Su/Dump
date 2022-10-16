import java.util.Scanner;

public class Main {

  public static void main(String args[]) {
    Scanner scanner = new Scanner(System.in);

    int a = scanner.nextInt();
    int b = scanner.nextInt();

    try {
      System.out.println(a / b);
    } catch (ArithmeticException e) {
      // TODO: handle exception
      System.out.println("ArithmeticException " + e);
    }
  }
}

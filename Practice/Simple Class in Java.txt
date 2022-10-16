class Person {

  String name;
  int age;
}

public class Main {

  public static void main(String[] args) {
    Person piyush = new Person();
    Person jhon = new Person();

    piyush.age = 22;
    piyush.name = "Piyush Garg";

    jhon.name = "Jhon";
    jhon.age = 30;

    System.out.println(piyush.name + " is " + piyush.age + " years old");
  }
}

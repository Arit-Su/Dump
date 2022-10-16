class Person {

  private String name;
  private int age;

  private static int numberOfPersons;

  Person(String name, int age) {
    this.name = name;
    this.age = age;
    numberOfPersons++;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getName() {
    return this.name;
  }

  public int getAge() {
    return this.age;
  }

  public static int getTotalPersons() {
    return numberOfPersons;
  }
}

public class Main {

  public static void main(String[] args) {
    Person piyush = new Person("Piyush", 22);
    Person jhon = new Person("Jhon", 30);

    System.out.println(
      piyush.getName() + " is " + piyush.getAge() + " years old"
    );

    System.out.println("Total Persons: " + Person.getTotalPersons());
  }
}

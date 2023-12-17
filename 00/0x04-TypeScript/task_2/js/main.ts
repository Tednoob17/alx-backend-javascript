interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
};

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
};

class Director implements DirectorInterface {

    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
};

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
};

function createEmployee(salary: string | number): Director | Teacher {
    if (typeof(salary) === 'number' && salary < 500)
        return new Teacher();
    return new Director();
}

function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: TeacherInterface | DirectorInterface) {
    if (isDirector(employee))
        return employee.workDirectorTasks();
    return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
    if (todayClass === "Math")
        return "Teaching Math";
    return "Teaching History";
}

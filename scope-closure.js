function outer() {
    const a="Lavascript";
    const b = new Object();
    console.log(a);
    console.log(b);

    function inner(a,b) {
        a="Finish activity, you must";
        b={
            fam: 'Cohort, we are',
            JS: 'A pain, it is',
            Fri: 'For Friday, we wait',
            Prop: 'Updated, it has'
        };
        console.log(a);
        console.log(b);
    }

    inner(a,b);
    console.log(a);
    console.log(b);
}

outer();


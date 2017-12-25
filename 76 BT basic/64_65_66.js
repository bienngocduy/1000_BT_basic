const NoSolution = 0, Undetermined = -1;
function PT_bac_1(a, b, x)                            // Phương trình bậc 1
{
    let nSolution1;                                                     // Số nghiệm
    if (a != 0) {
        x = -b / a;
        nSolution1 = 1;
    }
    else                                                               // a = 0
    {
        x = 0;
        if (b == 0)
            nSolution1 = Undetermined;                                  // Phương trình vô định ( có vô số nghiệm)
        else
            nSolution1 = NoSolution;                                    // Phương trình vô nghiệm
    }
    return nSolution1;
}
function PT_bac_2(a, b, c, x1, x2)    // Phương trình bậc 2
{
    let nSolution2; x1 = x2 = 0;                                      // Mặc định
    if (a == 0)
        nSolution2 = PT_bac_1(b, c, x1);
    else {
        let Delta = b * b - 4 * a * c; let two_a = 2 * a;
        if (Delta < 0)
            nSolution2 = NoSolution;                                  // Phương trình vô nghiệm
        else if (Delta == 0) {
            x1 = x2 = -b / two_a;
            nSolution2 = 1;                                           // Phương trình có 1 nghiệm kép
        }
        else {
            let sqrtDelta = Math.sqrt(Delta);
            x1 = (-b - sqrtDelta) / two_a;
            x2 = (-b + sqrtDelta) / two_a;
            nSolution2 = 2;                                           // Phương trình có 2 nghiệm phân biệt
        }
    }
    return nSolution2;
}
function PT_bac_4(a, b, c,
    x1, x2, x3, x4)       // Phương trình trùng phương
{
    let nSolution, nSolution1, nSolution2;
    let y1, y2;
    x1 = x2 = 0; x3 = x4 = 0;                                            //  Mặc định
    nSolution1 = PT_bac_2(a, b, c, y1, y2);
    switch (nSolution1) {
        case NoSolution: case Undetermined:
            nSolution = nSolution1; break;
        case 1:
            nSolution = PT_bac_2(1, 0, -y1, x1, x2); break;
        case 2:
            nSolution2 = PT_bac_2(1, 0, -y1, x1, x2);
            switch (nSolution2) {
                case NoSolution:
                    nSolution = PT_bac_2(1, 0, -y2, x1, x2); break;
                case 1:
                    nSolution = 1 + PT_bac_2(1, 0, -y2, x2, x3); break;
                case 2:
                    nSolution = 2 + PT_bac_2(1, 0, -y2, x3, x4); break;
            }
    }
    return nSolution;
}

console.log(PT_bac_1(2, 2))
console.log(PT_bac_2(2, 2))
console.log(PT_bac_4(2, 2))
function iLoveMath(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let Base = base;

    for (size = Base; size > 0; size -= 2) {

        let floorSize = size * size;
        let floorCircm = 0;

        if (floorSize <= 4) {

            gold += floorSize;
            break;

        }

        floorSize >= 1 ? floorCircm = (size * 4) - 4 : floorCircm = 1;
        height++;

        if (height % 5 == 0) {

            lapis += floorCircm;
            stone += floorSize - floorCircm;

        }

        else {

            marble += floorCircm;
            stone += floorSize - floorCircm;

        }
    }
    height++;
    height = Math.floor(height * increment);

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${height}`);

}
iLoveMath(23, 0.5)
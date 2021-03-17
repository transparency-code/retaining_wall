export default {
    heading: 'Dimensions of Retaining Wall',

    units: {
        heightofwall: {
            label: 'Height of Wall (H)',
            unit: 'metre',
            value: 3.3,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        basewidth: {
            label: 'Base Width (B)',
            unit: 'metre',
            value: 2.5,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        thicknessofwallstemattop: {
            label: 'Thickness of Wall Stem at Top (Twtop)',
            unit: 'metre',
            value: 0.3,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        thicknessofwallstematbottom: {
            label: 'Thickness of Wall Stem at Bottom (Twbottom)',
            unit: 'metre',
            value: 0.3,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        thicknessofbase: {
            label: 'Thickness of Base (Tb)',
            unit: 'metre',
            value: 0.3,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        offsetofwallstemfromtoe: {
            label: 'Offset of Wall Stem from Toe (B1)',
            unit: 'metre',
            value: 1,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        thicknessofshearkey: {
            label: 'Thickness of Shear Key (Tn)',
            unit: 'metre',
            value: 0.5,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        heightofshearkey: {
            label: 'Height of Shear Key (Hn)',
            unit: 'metre',
            value: 0.1,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        offsetofshearkeyfromtoe: {
            label: 'Offset of Shear Key from Toe (Bn)',
            unit: 'metre',
            value: 0.1,
            step: 0.1,
            min:0,
            hasLabel: true
        },

        heightofwater: {
            label: 'Height of Water (Hw)',
            unit: 'metre',
            value: 0,
            step: 0.1,
            min:0,
            hasLabel: false
        },

        heightofsoilinfrontofwallforpassiveresistance: {
            label: 'Height of Soil in Front of Wall for Passive Resistance (Hp)',
            unit: 'metre',
            value: 1,
            step: 0.1,
            min:0,
            hasLabel: false
        },

        backfillinclination: {
            label: 'Backfill Inclination (β)',
            unit: 'degree',
            value: 0,
            step: 1,
            min:0,
            hasLabel: true
        },

        heightfromtopofwalltotopofbackfillslope: {
            label: 'Height from top of Wall to top of backfill slope (h)',
            unit: 'metre',
            value: 0,
            readOnly: true,
            hasLabel: true
        }
    }

}
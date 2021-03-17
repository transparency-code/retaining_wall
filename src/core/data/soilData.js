export default {
    heading: 'Soil Properties',

    units: {
        designAngleOfInternalFrictionOfRetainedMaterial: {
            label: 'Design Angle of Internal Friction of Retained Material (φ)',
            unit: 'degree',
            value: 29,
            step: 1,
            min:0,
            hasLabel: false
        },

        designCohesionOfRetainedMaterial: {
            label: 'Design Cohesion of Retained Material (c )',
            unit: 'kN/m²',
            value: 0,
            step: 1,
            min:0,
            hasLabel: false
        },

        densityOfRetainedMaterial: {
            label: 'Density of Retained Material (q)',
            unit: 'kN/m³',
            value: 20,
            step: 1,
            min:0,
            hasLabel: false
        },


        submergedDensityOfRetainedMaterial: {
            label: 'Submerged Density of Retained Material (qs)',
            unit: 'kN/m³',
            value: 0,
            step: 1,
            min:0,
            hasLabel: false
        },

        designAngleOfInternalFrictionOfBaseMaterial: {
            label: 'Design Angle of Internal Friction of Base Material (φb)',
            unit: 'degree',
            value: 30,
            step: 1,
            min:0,
            hasLabel: false
        },

        designCohesionOfBaseMaterial: {
            label: 'Design cohesion of base material (cb )',
            unit: 'kN/m²',
            value: 0,
            step: 1,
            min:0,
            hasLabel: false
        },

        designOfBaseMaterial: {
            label: 'Density of base material (qb )',
            unit: 'kN/m³',
            value: 0,
            step: 1,
            min:0,
            hasLabel: false
        },

        
        geoTechnicalUltimateBearingCapacity: {
            label: 'Geotechnical Ultimate Bearing Capacity',
            unit: 'kN/m²',
            value: 225,
            step: 1,
            min:0,
            hasLabel: false
        },
        
        strengthReductionFactorForBearing: {
            label: 'Strength Reduction Factor for Bearing',
            unit: '',
            value: 0.5,
            step: 0.1,
            min:0,
            hasLabel: false
        },

        allowableGeoTechnicalBearingCapacity: {
            label: 'Allowable Geotechnical Bearing Capacity',
            unit: '',
            value: 112.5,
            step: 0.1,
            min:0,
            hasLabel: false,
            readOnly: true
        },

        designUncertaintyFactorForFrictionAngleOfRetainedMaterial: {
            label: 'Design Uncertainty Factor for Friction Angle of Retained Material (Fufr)',
            unit: '',
            value: 0.85,
            step: 0.01,
            min:0,
            hasLabel: false
        },

        designAngleofFrictionofRetainedMaterial: {
            label: 'Design Angle of Friction of Retained Material f*r=tan-1[(tanf)Fufr]',
            unit: 'degree',
            value: 25.23,
            step: 0.01,
            min:0,
            hasLabel: false,
            readOnly: true
        },

        characteristicExternalFrictionAngle: {
            label: 'Characteristic External Friction Angle (Soil to Soil Interface) (d*r = f*r)',
            unit: 'degree',
            value: 25.23,
            step: 0.01,
            min:0,
            hasLabel: false,
            readOnly: true
        },

        designUncertaintyFactorforFrictionAngleofBaseMaterial: {
            label: 'Design Uncertainty Factor for Friction Angle of Base Material (Fufb)',
            unit: null,
            value: 0.85,
            step: 0.01,
            min:0,
            hasLabel: false
        },

        designAngleOfFrictionOfBaseMaterial : {
            label: 'Design Angle of Friction of Base Material f*b=tan-1[(tanf)Fufb]',
            unit: 'degree',
            value: 26.14,
            step: 0.01,
            min:0,
            hasLabel: false,
            readOnly: true
        }
       
    }

}
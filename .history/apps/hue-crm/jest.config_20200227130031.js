module.exports = {
    name: 'fractal-crm',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/fractal-crm',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};

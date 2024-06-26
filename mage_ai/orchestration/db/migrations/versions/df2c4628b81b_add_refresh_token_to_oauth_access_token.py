"""Add refresh token to oauth access token

Revision ID: df2c4628b81b
Revises: 03135dd2b4be
Create Date: 2024-02-05 16:00:15.826952

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df2c4628b81b'
down_revision = '03135dd2b4be'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('oauth2_access_token', schema=None) as batch_op:
        batch_op.add_column(sa.Column('refresh_token', sa.String(length=255), nullable=True))

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('oauth2_access_token', schema=None) as batch_op:
        batch_op.drop_column('refresh_token')

    # ### end Alembic commands ###

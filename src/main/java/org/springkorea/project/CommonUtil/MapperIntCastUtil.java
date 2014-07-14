package org.springkorea.project.CommonUtil;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;

public class MapperIntCastUtil implements TypeHandler {

	@Override
	public Object getResult(ResultSet arg0, String arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getResult(ResultSet arg0, int arg1) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object getResult(CallableStatement arg0, int arg1)
			throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setParameter(PreparedStatement ps, int i, Object object,
			JdbcType jdbcType) throws SQLException {
		int  value = Integer.parseInt((String) object);
		ps.setInt(i, value);
	}

	
}
